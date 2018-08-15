import { connect } from 'react-redux'
import { deletePlace } from '../editors/editorActions'
import DeletePlace from './DeletePlace'

const mapStateToProps = ({ editor }) => ({
  feature: editor.feature
})

const mapDispatchToProps = {
  deletePlace
}

const DeletePlaceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeletePlace)

export default DeletePlaceContainer
