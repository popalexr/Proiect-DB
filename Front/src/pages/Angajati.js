import '../App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Angajati = () => {
  const [angajati, setAngajati] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8081/api/angajati');

      console.log(response.data);

      setAngajati(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Angajati</h1>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nume</th>
            <th>Prenume</th>
            <th>Functie</th>
            <th>Actiune</th>
          </tr>
        </thead>
        <tbody>
          {angajati.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center">Nu sunt angajati inregistrati.</td>
              </tr>
            )}

          {angajati.map((angajat) => (
            <tr key={angajat.ID_Angajat}>
              <td>{angajat.ID_Angajat}</td>
              <td>{angajat.Nume}</td>
              <td>{angajat.Prenume}</td>
              <td>{angajat.Functie}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Angajati;