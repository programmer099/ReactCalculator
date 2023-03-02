function Result(props) {
    console.log(props);
    return (
        <input type="text" className="value" readOnly name="txt" value={props.calc} />
    );
}
export {Result};