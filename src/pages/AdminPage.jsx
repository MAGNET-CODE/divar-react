import CategoryForm from "components/template/CategoryForm"
import CategoryList from "components/template/CategoryList"

function AdminPage() {
  return (
    <div>
      <CategoryList />
      <CategoryForm />
    </div>
  )
}

export default AdminPage