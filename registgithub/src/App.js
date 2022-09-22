import React,{ useState } from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';// theme 전체 스타일의 주제


function App() {
  const [keyword,setKeyword] = useState('');
  const [data,setData] = useState([]);
  const columns = [
    {field : 'full_name', sortable : true ,filter : true},
    {field:"html_url",sortable : true ,filter : true},
    {field: 'owner.login',sortable : true ,filter : true},
    {field:'full_name',
    cellRenderer:parms =>
    <button onClick={()=> alert(parms.value)}>Press me</button>
    }
  ]

  const fetchData = ()=>{
    if(keyword !== ''){

    
    fetch(`https://api.github.com/search/repositories?q=${keyword}`)
    .then(response => response.json())
    .then(data => setData(data.items))
    .catch(err => console.error(err))

    alert('검색완료!')

    }else{
      alert('검색할 내용을 입력하세요.')
    }

  }

  return (
    <div className="App">
    <input
    value = {keyword} onChange = {e=> setKeyword(e.target.value)} />
    <button onClick = {fetchData}>fetchData</button>
    <div className="ag-theme-material"
    style={{height: 700, width: '90%'}}> <AgGridReact rowData={data}
    columnDefs={columns}
    pagination = {true}
    paginationPageSize={8}
    />
</div>

      

 
    
    </div>
  );
}

export default App;
