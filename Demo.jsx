// {
// var a = 10;
// let b = 20;
// const c = 30;
// }

// function Demo() {
//     testScope();
//     return (
//         <div>
//             This is Demo Page.
//             <br/>
//             a = {a}
//         </div>
//     );
// }

// export default Demo;

// class Demo extends React.Component{
//     a = 10;

//     b = () => {
//         this.a = 20
//     }
//     render() {
//         this.b1
//         return(
//             <div>
//                 This is demo page.
//                 <br/>
//                 a = {a}
//             </div>
//         );
//     }
// }

/*function Demo() {
    var l1 = [1,2,3];
    var l2 = [...l1,4,5,6];

    var obj1 = {x:10, y:20};
    var obj2 = {...obj1, z:30};
    return (
        <div>
            This is Demo Page.
            <br/>
            l2 = {l2}
            <br/>
            obj2 = {JSON.stringify(obj2)}
            <br/>
            <table border={1}>
                <tr>
                    <th>Index</th>
                    <th>Value</th>
                </tr>
            {l2.map((pt, index) => {
                return(
                    <tr>
                        <td>{index}</td>
                        <td>{pt}</td>
                    </tr>
                )
            })}
        </table>
         </div>
    );
}

export default Demo;*/
/*function fun1() {
    return (
        <div>
        This is from fun1
        </div>
    )
    }

    function fun2() {
    return (
        <div>
        This is from fun2
        </div>
    )
    }

export {fun1, fun2};*/
var arr = [1,2,3,4,5];
    return (
        <div>
         export function fun1() {arr.map((pt)=>{
        //return (<div>{pt*pt}</div>);
        //return pt*pt;
        //return <div>{pt*pt}</div>;
        //all are same
        return(pt*pt);
    })}

        This is from fun1
        </div>
    )
