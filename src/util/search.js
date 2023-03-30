export const search = (data, term) => {
    return data.filter((item) => item.title.toLowerCase().includes(term.toLowerCase()));
};
