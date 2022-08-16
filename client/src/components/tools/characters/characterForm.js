export default class CharacterForm extends Component {
    render() {
        return(
            <div className="character-form" id="characterForm">
                < form className="form-container">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Character" className="btn btn-success btn-block" />
                        <input type="button" value="Close" className="btn btn-danger btn-block" onClick={this.closeForm()} />
                    </div>
                </form>
            </div>
        )
    }
}