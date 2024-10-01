### Array() vs []
- [ 방법1 ] - 배열의 크기를 설정하기 위해서는 Array()를 사용해야 한다.
    ~~~
    ex)
    Array(3) // [empty x 3]
    ~~~
- `크기만 할당한 경우`에는 `empty로 표시`되며, `값`이 실제로 `할당되지 않은 상태`이다. 이 상태에서는 특정 배열 메서드(forEach, map 등)가 작동하지 않는다.
- fill() 함수를 사용하여 값을 할당한 후, map() 함수를 사용하여 원하는 값으로 채워 넣을 수 있다.
- 이때, fill()과 같은 함수로 값을 할당하지 않고 바로 map() 함수를 사용하려고 하면 empty 상태의 슬롯들은 처리되지 않는다.
- Array(3)처럼 `empty 슬롯이 있는 배열`에서는, `map(), forEach()와 같은 메서드는 동작하지 않는다.` 먼저 fill() 등으로 `값을 채운 후 사용`해야 한다.
    ~~~
    ex)
    Array(3).fill() // [undefined, undefined, undefined]
  
    ex)
    Array(3).fill().map((val, idx) => idx + 1) // [1, 2, 3]
  
    ex)
    // 사용하지 않는 변수의 경우 _(언더바)를 사용하여 표시하기도 한다.
    Array(3).fill().map((_, idx) => idx + 1) // [1, 2, 3]
    ~~~

- [ 방법2 ] - `Array.from()`을 사용하여 `배열을 생성`하고 `값`을 `할당`할 수도 있다.
- Array.from()은 `배열의 크기와 값을 동시에 설정`하는 데 유용하다.
    ~~~
    ex)
    Array.from({ length: 3 }) // [undefined, undefined, undefined]
  
    ex)
    Array.from({ length: 3 }).map((_, idx) => idx + 1) // [1, 2, 3]
  
    ex)
    Array.from({ length: 3 }, (val, idx) => idx + 1) // [1, 2, 3]  
  
    ex)
    // 사용하지 않는 변수의 경우 _(언더바)를 사용하여 표시하기도 한다.
    Array.from({ length: 3 }, (_, idx) => idx + 1) // [1, 2, 3]
    ~~~