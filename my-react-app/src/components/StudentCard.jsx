const studentName = "ChatGpt";
const course = "AIP343";
const favLanguage = "Python";

export default function StudentCard(){
    return(
        <div style={{background : 'grey', display : "flex", flexDirection : 'column', width : 'fit-content', alignItems : 'center', margin : '2em', padding : '2em'}}>
            <h2>{studentName}</h2>
            <p>Couse : {course}</p>
            <p>Favourite Language : {favLanguage}</p>
        </div>
    )
}