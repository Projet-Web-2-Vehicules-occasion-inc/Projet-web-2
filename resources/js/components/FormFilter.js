const FormFilter = ({size, color}) => {
    return (
        <form className="card p-5" style={{ width: size }}>

            <div className="mb-3 text-center">
                <span className="fs-5 fw-bold">Trouver votre prochain véhicule d'occasion</span>
            </div>
            <div className="mb-3">
                <select className="form-select" style={{backgroundColor : color}}>
                    <option selected>Choisissez une marque</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="mb-3">
                <select className="form-select" style={{backgroundColor : color}}>
                    <option selected>Choisissez un modèle</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="mb-3">
                <select className="form-select" style={{backgroundColor : color}}>
                    <option selected>Choisissez une année</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div>
                <button type="submit" class="btn btn-primary btn-block">Rechercher</button>
            </div>
        </form>  
    )
}

FormFilter.defaultProps = {
    size: '25rem',
    color: '#d9d9d9'
}

export default FormFilter;