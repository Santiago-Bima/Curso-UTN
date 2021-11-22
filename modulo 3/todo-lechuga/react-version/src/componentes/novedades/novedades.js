import react from 'react';

const NovedadItem=(props)=>{
    const {title, cuerpo, body}=props;

    return(
        <div className='novedades'>
            <h1>{title}</h1>
            <p>{cuerpo}</p>
            <div dangerouslySetInnerHTML={{__html: body}} />
        </div>
    )
}

export default NovedadItem;