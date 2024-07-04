import './Header.css'
import logo from '/vite.svg'
function Header() {
    return (
        <div className='container mx-auto border-2 border-blue-500 border-dashed'>
            <div className='basis-1/4 border-2 border-yellow-500 border-dashed'>Div 1</div>
            <div className='basis-1/4 border-2 border-red-500 border-dashed'>Div 2</div>
            <div className='basis-1/2 border-2 border-green-500 border-dashed text-center h-14'>Div 3</div>
        </div>
      );
}

export default Header;