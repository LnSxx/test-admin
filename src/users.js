import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    SelectInput,
    TextInput,
    AutocompleteInput,
    Filter,
    DateInput
} from 'react-admin';
import {
    required,
    minLength,
    maxLength,
    number,
    email
} from 'react-admin';

//INPUT VALIDATION
const validateName = [required(), minLength(2), maxLength(45)];
const validateEmail = email();
const validatePhone = [number(), required()];
const validatePassword = [required(), minLength(4)];


const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <SelectInput  label="Status" source="status" allowEmpty emptyValue={null} 
            choices={[
                { id: 'client', name: 'Client' },
                { id: 'partner', name: 'Partner' },
                { id: 'admin', name: 'Admin' },
            ]}/>
    </Filter>
);

export const UserList = props => (
    <List filters={<UserFilter />} {...props}>
        <Datagrid>
            <TextField source="email"/>
            <TextField source="password" />
            <TextField source="phone"/>
            <TextField source="name"/>
            <TextField source="status"/>
            <TextField source="created_at"/>
            <TextField source="last_edit" />
            <EditButton />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
                <TextInput source="email" validate={validateEmail}/>
                <TextInput source="password" validate={validatePassword}/>
                <TextInput source="phone" validate={validatePhone}/>
                <TextInput source="name" validate={validateName}/>
                <AutocompleteInput source="status" choices={[
                    { id: 'client', name: 'Client' },
                    { id: 'partner', name: 'Partner' },
                    { id: 'admin', name: 'Admin' },
                ]} />
                <DateInput source="last_edit" options={{ format: 'DD/MM/YYYY' }} defaultValue={new Date()} />
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
       <Create {...props}>
           <SimpleForm>
                <TextInput source="email" validate={validateEmail}/>
                <TextInput source="password" validate={validatePassword}/>
                <TextInput source="phone" validate={validatePhone}/>
                <TextInput source="name" validate={validateName}/>
                <AutocompleteInput source="status" choices={[
                    { id: 'client', name: 'Client' },
                    { id: 'partner', name: 'Partner' },
                    { id: 'admin', name: 'Admin' },
                ]} />
                <DateInput source="created_at" defaultValue={new Date()} />
            </SimpleForm>
            
        </Create>
    );
    