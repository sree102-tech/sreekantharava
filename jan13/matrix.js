matrix=[
    [14,56,77],
    [17,15,25],
    [18,20,47],
];

    total=0;
    for(i=0;i<matrix.length; i++){
        for(j=0; j<matrix[i].length; j++){
            if(i===j){
                total+=matrix[i][j];
            }    
        }
    }
    document.write(total);
