import logo from './logo.svg';
import './App.css';
import React, { useCallback, useState } from "react"
import Counter from './Counter.tsx';
import ProductList from './ProductList.js';

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
        
        <div>
            <h4>Zad1</h4>
            <button onClick={handleClick}>Kliknij mnie</button>
            <button onClick={() => console.log("kliknieto ale w inline.")}>Kliknij mnie jako onClick inline</button>
        </div>

        <div>
            <h4>Zad2</h4>
            <button onClick={() => setCount((c) => c + 1)}>Zwiększ:{count}</button>
            <Counter onLog={() => console.log("Licznik:", count)} />
        </div>

        <div>
            <h4>Zad3</h4>
            <button onClick={() => setCount((c) => c + 1)}>Zwiększ:{count}</button>
            <Counter onLog={onLog} />
        </div>

        <div>
            <h4>Zad4</h4>
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