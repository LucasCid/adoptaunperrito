import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //
import MyCard from './MyCard';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <>
      {/* <h1> Reutilizando componentes </h1> */}
      <Header />
      <div className='div-mycard'>
      <MyCard className="mycard"
        image="src/assets/perro1.jpg"
        title="Bartolo"
        text="Lleno de energia y listo para jugar. Dale a Bartolo el hogar amoroso que se merece!"
        colorButton="success"
        textButton="Adoptar"
      /> <MyCard className="mycard"
      image="/src/assets/perro2.jpg"
      title="Messi"
      text="Es jugueton, amigable y se lleva bien con ninos y otros animales. Haz de Messi parte de tu familia hoy mismo!"
      colorButton="primary"
      textButton="Bobtail"
    />
     <MyCard className="mycard"
        image="src/assets/perro3.jpg"
        title="Gohan"
        text="Un perro de tamano mediano con un corazon gigante. Hazte amigo de Gohan y experimenta un amor incondicional!"
        colorButton="danger"
        textButton="Shar Pei"
      />
       <MyCard className="mycard"
        image="src/assets/perro4.jpg"
        title="Princesa"
        text="Es una companera leal y carinosa que adora los mimos y los abrazos. Ayuda a Princesa a econtrar su final feliz!"
        colorButton="warning"
        textButton="Beagle"
      />
    { /* Definimos las props que se pasaran a MyCard */}
    </div>
    <Footer />
    </>
  );
}
export default App;

