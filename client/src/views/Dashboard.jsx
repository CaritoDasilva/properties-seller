import React, { useEffect, useState } from 'react';
import PropertyService from '../services/propertyService';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Dashboard = () => {
    const [properties, setProperties] = useState([]);
    const propertyService = new PropertyService();

    const soldProperty = async (id, property) => {
        try {
            const updatedPropInService = await propertyService.updateProperty(id, { ...property, isSold: true })
            getPropertiesFromService();
            return updatedPropInService;
        } catch (error) {
            console.error(error);
        }
    }

    const getPropertiesFromService = async () => {
        try {
            const propertiesList = await propertyService.getAllProperties();
            setProperties(propertiesList);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getPropertiesFromService()
    }, [])

    return (
        <div>
            <h1>Mis propiedades Vendidas</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Nombre Propiedad</th>
                        <th>Descripción</th>
                        <th>Ubicación</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        properties.length > 0 ? properties.filter(prop => prop.isSold).map(property => (
                            <tr key={property._id}>
                                <td>{property.name}</td>
                                <td>{property.description}</td>
                                <td>{property.location}</td>
                                <td>{!property.isSold ? 'Disponible' : 'Vendida'}</td>
                                <td>
                                    <Button variant="info" onClick={() => soldProperty(property._id, property)} >Vender</Button>
                                </td>
                            </tr>
                        )) : 'No hay ninguna propiedad'
                    }

                </tbody>
            </Table>

            <h3>Mis propiedades disponibles</h3>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Nombre Propiedad</th>
                        <th>Descripción</th>
                        <th>Ubicación</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        properties.length > 0 ? properties.filter(prop => !prop.isSold).map(property => (
                            <tr key={property._id}>
                                <td>{property.name}</td>
                                <td>{property.description}</td>
                                <td>{property.location}</td>
                                <td>{!property.isSold ? 'Disponible' : 'Vendida'}</td>
                                <td>
                                    <Button variant="info" onClick={() => soldProperty(property._id, property)} >Vender</Button>
                                </td>
                            </tr>
                        )) : 'No hay ninguna propiedad'
                    }

                </tbody>
            </Table>

        </div>
    )
}

export default Dashboard;