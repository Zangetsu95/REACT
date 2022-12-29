/**
 * It's a function that takes an object with the properties name, value, onChange, and children, and
 * returns a div with a label and an input
 * @returns A function that takes in a name, value, onChange, and children.
 */
function Field ({name, value, onChange, children}) {
    return <div className="form-group">
        <label htmlFor={name}>{children}</label>
        <input type="text" value={value} onChange={onChange} id={name} name={name} className="form-control"/>
    </div>
}

/**
 * It's a function that takes in a name, value, onChange, and children, and returns a div with a
 * checkbox and a label.
 * @returns A div with a checkbox and a label.
 */
function Checkbox ({name, value, onChange, children}) {
    return <div className="form-check">
        <input type="checkbox" checked={value} onChange={onChange} id={name} name={name} className="form-check-input"/>
        <label htmlFor={name} className="form-check-label">{children}</label>
    </div>
}

/* It's a form with a first name, last name and newsletter checkbox. When the form is submitted, the
state is reset and the form data is displayed */
class Home extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            nom: '',
            prenom: '',
            newsletter: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (e) {
        const name = e.target.name
        const type = e.target.type 
        const value = type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit (e) {
        e.preventDefault()
        const data = JSON.stringify(this.state)
        this.setState({
            nom: '',
            prenom: '',
            newsletter: false
        })
    }
    
    render () {
        return <form className="container" onSubmit={this.handleSubmit}>
            <Field name="nom" value={this.state.nom} onChange={this.handleChange}>Nom</Field>
            <Field name="prenom" value={this.state.prenom} onChange={this.handleChange}>Prénom</Field>
            <Checkbox name="newsletter" value={this.state.newsletter} onChange={this.handleChange}>S'abonner à la newsletter</Checkbox>
            <div className="form-group">
                <button className="btn btn-primary">Envoyer</button>
            </div>
            {JSON.stringify(this.state)}
        </form>
    }

}


ReactDOM.render(<Home/>, document.querySelector('#app'))