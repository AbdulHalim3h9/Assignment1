# Answer to the question no 1

## Comparison 1
Interface স্পেসিফাই করে দেয় একটা অবজেক্ট কেমন হবে (কি কি properties থাকবে, কি কি method থাকবে, parameter টাইপ কেমন হবে, return type কেমন হবে)

Types হলো কোনো অবজেক্ট কোন কোন data type ব্যবহার করে define করা যাবে তা নির্ধারণ করার পদ্ধতি

## Comparison 2
Interface এ union বা intersection করা যায়না

Types এ union বা intersection করা যায়

---

# Answer to the question no 2

keyof কীওয়ার্ড ব্যবহার করে কোন অবজেক্ট এর key গুলো নিয়ে একটা union বানানো যায়

```ts
type User = {
  name: string;
  age: number;
  email: string;
};

type UserKeys = keyof User;

"name" | "age" | "email"
```
Key গুলো নিয়ে একটা union হয়ে গেলো