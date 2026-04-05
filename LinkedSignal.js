const source = signal(10);
const linked = linkedSignal(() => source());

source.set(99);
console.log(linked()); // 99 ✅ — following source

linked.set(42);        // override locally
console.log(linked()); // 42

source.set(1);
console.log(linked()); // 42 — override still active!

linked.reset();        // explicitly reset
console.log(linked()); // 1 ✅ — now follows source again


//computation + linkedSignal

export class ProductCardComponent {
  product = input.required<Product>();
  amount = linkedSignal({
    source: this.product,
    computation: () => 1,
  });

  addProduct() {
    this.amount.update(v => v + 1);
  }

  removeProduct() {
    this.amount.update(v => v - 1);
  }
}


// product changes → computation runs → amount = 1
//                                           ↓
//                                (computation is now idle)
//                                           ↓
// user clicks addProduct()  →  amount.update(v => v + 1) ✅ works fine!
// user clicks addProduct()  →  amount = 3 ✅
// user clicks addProduct()  →  amount = 4 ✅
//                                           ↓
// product changes again → computation runs again → amount = 1 (reset!)




linkedSignal ALWAYS returns the computation value when source changes, never the raw source value directly.

  // computation returns source as-is
computation: (p) => p        // linkedSignal value = new source value

// computation ignores source, returns constant
computation: () => 1         // linkedSignal value = 1, regardless of source

// computation uses source partially
computation: (p) => p.minOrderQty  // linkedSignal value = some property of source

// example
amount = linkedSignal({
  source: this.product,
  computation: () => 1,
});

amount.set(42); // override manually

// product changes...
this.product.set(newProduct);

console.log(amount()); // 1 ✅ — reset! computation ran




