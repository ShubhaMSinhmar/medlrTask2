import Counting from "./first";
import LocalCounting from "./two";
import Promisess from "./three";
import IKUNS from "./five";
import Axios from "./six";
import SelectOption from "./seven";


export default function Home() {
  return (
    <div
      className="flex flex-col items-center min-h-screen">
        <Counting/>
        <br/>
        <LocalCounting/>
        <br/>
        <Promisess/>
        <br/>
        <IKUNS/>
        <br/>
        <Axios/>
        <br/>
        <SelectOption/>
    </div>
  );
}
