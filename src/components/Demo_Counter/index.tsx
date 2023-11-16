//useState para cambios de estado, useEffect para saber los montadas, actualizaciones, desmontadas de los compomnentes
import { useState, useEffect } from 'react';

interface CounterProps {
  initialValue: number;
  //? marca opcional
  step?: number;
  title: string;
}

//Otra forma de recibir las props
const Counter = ({ initialValue, title, step = 1 }: CounterProps) => {
  //const Counter = (props: CounterProps) => {
  //console.log(props);
  //count: valor setCount: función(valorinicial)
  const [count, setCount] = useState(initialValue);
  const [color, setColor] = useState('red');
  //const { initialValue, title, step } = props;

  //Se ejecuta solo cuando se monta y todavía no se ha renderizado; por ejemplo para cuando traer datos de API
  useEffect(() => {
    console.log('con dependencia vacía');
  }, []);

  useEffect(() => {
    console.log('con dependencias');
  }, [count]);

  //Se ejecuta cuando se monta, se actualiza o se desmonta
  useEffect(() => {
    console.log('sin dependencia');
  });
  return (
    <div>
      <h1 style={{ color: color }}>{title}</h1>
      <p>{count}</p>
      <p>{step}</p>
      <button
        onClick={() => {
          setCount(count + step);
          setColor(color === 'red' ? 'blue' : 'red');
        }}
      >
        Aumentar contador
      </button>
      {count === 0 ? (
        <p>El contador está en 0</p>
      ) : (
        <p>El contador está es mayor a 0: {count}</p>
      )}
    </div>
  );
};

export default Counter;
