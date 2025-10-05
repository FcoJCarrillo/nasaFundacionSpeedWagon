import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MedicalForm = () => {
    // Estado para manejar los datos del formulario (opcional pero recomendado)
    const [formData, setFormData] = useState({
        peso: '',
        altura: '',
        problemasMedicos: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos enviados:', formData);
        // Aquí podrías enviar los datos a tu backend o a las acciones de tu Context
    };

    return (
        <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
            <h2 className="mb-4 text-center text-white">Medical Record</h2>
            
            {/* Campo Peso */}
            <Form.Group className="mb-3" controlId="peso">
                <Form.Label className='text-white'>Weight (kg)</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="Introduce your weight" 
                    value={formData.peso}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Campo Altura */}
            <Form.Group className="mb-3" controlId="altura">
                <Form.Label className='text-white'>Height (cm)</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="Introduce your Height" 
                    value={formData.altura}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            {/* Campo Altura */}
            <Form.Group className="mb-3" controlId="altura">
                <Form.Label className='text-white'>Age</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="Introduce your age" 
                    value={formData.altura}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            {/* Campo Problemas Médicos (Textarea) */}
            <Form.Group className="mb-3" controlId="problemasMedicos">
                <Form.Label className='text-white'>Medical Issues</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    placeholder="Describe any relevant Medical Issues" 
                    value={formData.problemasMedicos}
                    onChange={handleChange}
                />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
                Save Information
            </Button>
        </Form>
    );
};

export default MedicalForm;