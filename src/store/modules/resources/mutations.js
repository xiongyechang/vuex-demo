const GET_RESOURCES_LIST = (state,resources) => {
    console.log(resources);
    state.resources = resources;
    console.log('resources mutations', resources);
}

export default {
    GET_RESOURCES_LIST
}