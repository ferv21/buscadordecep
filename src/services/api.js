const fetchPostalCode = async (cep) => {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();
    return data;
};

export default fetchPostalCode;