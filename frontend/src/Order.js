import React, { useState, Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function ModelManual({ file }) {
    const gltf = useLoader(GLTFLoader, file);
    return <primitive object={gltf.scene} scale={1.5} />;
}

function Order({ HandleChange, prevOrders}) {
    const [formData, setFormData] = useState({
        Name: "",
        Address: "",
    });

    const [file, setFile] = useState(null);
    const [Url, setUrl] = useState(null);

    function Button_on_click() {
        let resetData = {};
        fields.forEach(f => {
            resetData[f.id] = "";
        });
        HandleChange([...prevOrders, formData]);
        setFormData(resetData);
        setFile(null);
        setUrl(null);
    }

    function Handle_change(event, field) {
        setFormData(prev => ({
            ...prev,
            [field]: event.target.value
        }));
    }

    function FileUploaded(event) {
        let file = event.target.files[0];
        if (file) {
            setFile(file);
            setUrl(URL.createObjectURL(file));
        }
    }

    let fields = [
        { id: "Name", label: "Name", value: formData.Name, type: 'text', class: 'input_field' },
        { id: "Address", label: "Address", value: formData.Address, type: 'text', class: 'input_field' }
    ];

    return (
        <div className="page">
            <div className="form-container">
                {fields.map((field) =>
                    <React.Fragment key={field.id}>
                        <label htmlFor={field.id}>{field.label}</label>
                        <input
                            className={field.class}
                            id={field.id}
                            onChange={(event) => Handle_change(event, field.id)}
                            value={field.value}
                            type={field.type}
                        />
                    </React.Fragment>
                )}
                <label htmlFor="fileInput" className="tab_buttons">Upload</label>
                <input type="file" id="fileInput" style={{ display: "none" }} onChange={FileUploaded} />
                {file && <p className="selected-file">Selected file: {file.name}</p>}
            </div>
            <p>Preview</p>
            <div className = "canvas">
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    {Url &&
                        <Suspense fallback={null}>
                            <ModelManual file={Url} />
                        </Suspense>
                    }
                    <OrbitControls />
                </Canvas>
            </div>
            <br />
            <button className="tab_buttons" onClick={Button_on_click}>Submit</button>
        </div>
    );
}

export default Order;
