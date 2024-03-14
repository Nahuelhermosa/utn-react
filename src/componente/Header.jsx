import logo from '/logo.png';
export default function Header () {
    return (
        <header>
        <img src={logo} alt="" width={70}/>
        <h1>the little shop</h1>
        <p>shop now,pay later</p>
        </header>
    );
}