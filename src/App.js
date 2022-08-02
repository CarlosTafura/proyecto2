import './App.css';
import Header from './Header';
import Footer from './Footer';
import CustomButton from './Components/CustomButton';
import DarkVariantExample from './DarkVariantExample';
import ItemListContainer from './Containers/ItemListContainer';


function App() {
  return (
    <>
    <Header/>
    <ItemListContainer greeting="Bienvenido a tu tienda online"/>
    <DarkVariantExample/>    
    <CustomButton title="Click me" color="primary"/>
    <CustomButton title="Clickeame" color="secondary"/>
    <CustomButton title="STOP" color="danger"/>
    <CustomButton title="ANY"/>
    <Footer/>
    </>
     );
}

export default App;
