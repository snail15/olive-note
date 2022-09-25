import React from 'react';
import Note from '../note/Note';
import useAxios from '../../hooks/useAxios';
import axios from '../../api/axios';
import Olive from '../../models/olive.model';

const NoteList = () => {
  const [olives, error, loading] = useAxios({
    axiosInstance: axios,
    method: 'GET',
    url: '/olives.json',
    requestConfig: {},
  });

  console.log('list');
  console.log(olives);

  // {olives.map((olive) => (
  //   <Note
  //     key={olive.id}
  //     name={olive.name}
  //     id={olive.id}
  //     origin={olive.origin}
  //   />
  // ))}
  return <div>Note List</div>;
};

export default NoteList;
