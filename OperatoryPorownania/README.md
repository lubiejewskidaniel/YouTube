# Operatory porównania w JavaScript: `==` vs `===`

To repozytorium zawiera krótkie, praktyczne przykłady użycia operatorów porównania w JavaScript:

- `==` – operator **luźnej równości** (z konwersją typów)
- `===` – operator **ścisłej równości** (bez konwersji typów)

## 🔍 O co chodzi?

JavaScript udostępnia dwa sposoby porównywania wartości:

| Operator | Nazwa          | Typ porównania      | Przykład                |
| -------- | -------------- | ------------------- | ----------------------- |
| `==`     | luźna równość  | z konwersją typów   | `'5' == 5 // ✅ true`   |
| `===`    | ścisła równość | bez konwersji typów | `'5' === 5 // ❌ false` |

## ✅ Rekomendacja

👉 W nowoczesnym kodzie zaleca się **stosowanie `===`**, aby uniknąć nieoczekiwanych efektów związanych z konwersją typów.

---

> 📌 Jeśli nie masz konkretnego powodu, żeby użyć `==`, użyj `===`.
