let contact = {
    fullname: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}
for(let key in contact){
    // Code goes here
    let texto=key;
    texto=texto+" : "+contact[key];
    console.log(texto);
}

