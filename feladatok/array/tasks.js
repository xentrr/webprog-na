export default class Tasks {
    // 1. HTML táblázat generálása
    // Felhasználókat leíró objektum (id, name, email) tömbből hozz létre HTML <tr> sorokat három <td> cellával.
    // Bemenet: user objektum [{ id: number, name: string, email: string }, ...]
    // Kimenet: HTML string '<tr><td>...</td><td>...</td><td>...</td></tr><tr>...'
    generateTable(users) {
        return users.map(
            user => `<tr><td>${user.Id}</td><td>${user.Name}</td><td>${user.Email}</td></tr>`
        )
    }

   // 2. Aktív felhasználók szűrése
getActiveUsers(users) {
    return users.filter(user => user.isActive === true);
}

// 3. Navigációs menüpontok generálása
generateMenu(items) {
    return items
        .map(item => `<li><a href="${item.url}">${item.title}</a></li>`)
        .join('');
}

// 4. Hibás űrlapmező ellenőrzése
hasInvalidField(fields) {
    return fields.some(field => field.isValid === false);
}

// 5. Hibaüzenetek kigyűjtése
getErrorMessages(fields) {
    return fields
        .filter(field => field.isValid === false)
        .map(field => field.message);
}

//#region Egyéb feladatok (nem kötelező)

// 6. Webshop kosár végösszeg számítása
calculateCartTotal(cart) {
    return cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
}

// 7. Termékek rendezése ár szerint
sortProductsByPrice(products) {
    return [...products].sort((a, b) => a.price - b.price);
}

// 8. Lapozás (pagination)
getPage(items, page, pageSize) {
    const start = (page - 1) * pageSize;
    return items.slice(start, start + pageSize);
}

// 10. 2D lista napi összesítése
getDailyTotals(stats) {
    return stats.map(day =>
        day.reduce((sum, value) => sum + value, 0)
    );
}

//#endregion
}