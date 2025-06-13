import './App.css';
import React, { useCallback, useState } from "react"
import Counter from './Counter.tsx';

function handleClick() {
    console.log("Kliknięto przycisk!")
}

export default function App() {
  const [count, setCount] = useState(0)
  
  const onLog = useCallback(() => { console.log("Licznik:", count)}, [count]) 

  const [products, setProducts] = useState(["Jabłko", "Gruszka", "Banan"])

  const removeProduct = useCallback((item: string) => { setProducts((prev) => prev.filter((p) => p !== item)) }, [])

  return (
    <div>
        <h1>Laboratorium 9</h1>
        <div>
            <h2>Zadanie 1</h2>
            <button onClick={handleClick}>Kliknij mnie</button>
            <button onClick={() => console.log("kliknieto ale w inline.")}>Kliknij mnie jako onClick inline</button>
        </div>

        <div>
            <h2>Zadanie 2</h2>
            <button onClick={() => setCount((c) => c + 1)}>Zwiększ:{count}</button>
            <Counter onLog={() => console.log("Licznik:", count)} />
        </div>

        <div>
            <h2>Zadanie 3</h2>
            <button onClick={() => setCount((c) => c + 1)}>Zwiększ:{count}</button>
            <Counter onLog={onLog} />
        </div>

        <div>
            <h2>Zadanie 4</h2>
            <ul>
              {products.map((product) => (
                <li key={product}>
                  {product}{" "}
                  <button onClick={() => removeProduct(product)}>Usuń</button>
                </li>
              ))}
            </ul>
        </div>
    </div>
  )
}