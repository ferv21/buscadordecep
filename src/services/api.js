const fetchPostalCode = async (cep) => {
    try {
        const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if(!res.ok){
            throw new Error("Erro na requisição");
        } else {
            const data = await res.json();
            return data;
        }
        
    } catch(error){
        alert("Cep Inválido");
        return null;
    }
};

export default fetchPostalCode;