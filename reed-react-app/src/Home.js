import { useState, useEffect } from 'react';
import Family from './Family';

const Home = () => {
    // Create reactive value so it can be changed and updated by using a hook
    //let title = "Reed's React App Homepage";
    const [title, setTitle] = useState("Reed's React App Homepage");
    const [family, setFamily] = useState([
        { name: "Jennifer", relation: "mother", sex: "female", id: 1 },
        { name: "Eric", relation: "father", sex: "male", id: 2 },
        { name: "Bailey", relation: "sister", sex: "female", id: 3 },
        { name: "Madeleine", relation: "sister", sex: "female", id: 4 },
        { name: "Reed", relation: "self", sex: "male", id: 5 },
        { name: "Adele", relation: "sister", sex: "female", id: 6 }
    ]);
    const handleDelete = (id) => {
        const newMembers = family.filter(member => member.id !== id);
        setFamily(newMembers);
    }
    const link = "https://windanmarket.com/"
    const handleClick = (e) => {
        console.log("Clicked!", e.target)
        document.querySelector(".home").style.backgroundColor = "green";
        setTitle("Reed clicked the button!")
    }
    const handleClickAgain = (name) => {
        console.log(name + " Clicked Again!")
        document.querySelector(".home").style.backgroundColor = "red";
    }

    // run on first render
    useEffect(() => {
        console.log('use effect ran')
        console.log(title)
    }, [title]);

    return ( 
        <div className="home">
            <h1>{title}</h1>
            <a href={link}>Windan Market</a>
            <button onClick={handleClick}>Click Me!</button>
            {/* Must use wrapped anonymous function to be able to input a variable without invoking the function */}
            <button onClick={() => handleClickAgain('Reed')}>Click Me Again!</button>
            {/* Example of using props */}
            <Family family={family} title="Reed's Family" handleDelete={handleDelete} />
            <Family family={family.filter((member) => member.relation === "sister")} title="Reed's Sisters" handleDelete={handleDelete} />
        </div>
     );
}
 
export default Home;