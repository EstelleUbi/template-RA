import * as React from 'react';
import { Datagrid, TextField, List, useResourceContext } from 'react-admin';

const ResourceName = () => {
    const resource = useResourceContext();
    return <>{resource}</>;
}

const UsersList = () => (
    <List>
        <>
            <ResourceName /> {/* renders 'posts' */}
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
            </Datagrid>
        </>
    </List>
)

export default UsersList;