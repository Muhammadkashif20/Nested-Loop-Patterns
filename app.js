// pattern 1
for(var i=0;i<=5;i++){
    for(var j=i;j<5;j++){
        document.write('*')
    }
    document.write('<br>')
}

// pattern 2

for(var i=0;i<=5;i++){
    for(var j=0;j<i;j++){
        document.write(i)
    }
    document.write('<br>')
}
document.write('<br>')

// pattern 3

for(var i=1;i<=5;i++){
    // document.write(i,'<br>')
    for(var j=1;j<=i;j++){
        document.write(j)
    }
    document.write('<br>')
}
document.write('<br>')

// pattern 4

for(var i=0;i<5;i++){
    document.write('A ')
    for(var j=0;j<i;j++){
        document.write('B ')
    } 
        document.write('<br>')
    }
    


