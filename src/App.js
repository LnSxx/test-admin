import './App.css';
import { Admin, Resource } from 'react-admin';
import localStorageDataProvider from 'ra-data-local-storage';
import { UserList, UserEdit, UserCreate } from './users';
const dataProvider = localStorageDataProvider();

function App() {
  console.log(dataProvider)
  return (
      <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit}/>
      </Admin>
  );
}

export default App;
