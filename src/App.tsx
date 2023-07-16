import { FC, useState } from "react";
import cls from './style.module.scss'
import { Icon } from "./testComponent/Component";
import TestSvg from './resource/icons/logo.svg'

export const App: FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className={cls.hello}>
        <p>{counter}</p>
        <div>
          <button onClick={() => setCounter(prev => prev + 1)}>increment</button>
          <button onClick={() => setCounter(prev => prev - 1)}>decrement</button>
        </div>
      </div>

      <div>
        <Icon Svg={TestSvg} />
      </div>
    </>
  )
}