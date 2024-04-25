import { Alert } from "react-native";
import { useEffect, useState } from "react";

const useAppwrite = (fn) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {             // Definición de como se carga la data y establece los estados
    setLoading(true);
    try {
      const res = await fn();
      setData(res);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {                           // Llamada a la carga de data y establecmiento de los estados  
    fetchData();
  }, []);

  const refetch = () => fetchData();          // Redefinición de la llamada

  return { data, loading, refetch };          // Retorno del hook
};

export default useAppwrite;