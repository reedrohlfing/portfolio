// const Family = ({ family, title }) => {

const Family = (props) => {
    const family = props.family
    const title = props.title
    const handleDelete = props.handleDelete;
    return ( 
        <div className="family-list">
            <h1>{title}</h1>
            {family.map((member) => (
                <div className='member-preview' key={member.id}>
                    <h2>{member.name} Rohlfing</h2>
                    <p>{member.relation}</p>
                    <button onClick={() => handleDelete(member.id)}>Delete Member</button>
                </div>
            ))}
        </div>
     );
}
 
export default Family;


