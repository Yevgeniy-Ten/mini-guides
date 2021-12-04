export const createMultiFormData = (data) => {
    const multiPostData = new FormData()
    Object.keys(data).forEach((name) => multiPostData.append(name, data[name]))
    return multiPostData
}
