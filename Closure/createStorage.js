function createStorage(key) {

    const store = JSON.parse(localStorage.getItem(key)) ?? {}; // if store = null => {}


    const save = () => {
        localStorage.setItem(key, JSON.stringify(store));
    }

    const storage = {
        get(key) {
            return store[key];
        },
        set(key, value) {
            store[key] = value;
            save();
        },
        remove(key) {
            delete store[key];
            save();
        }
    }

    return storage;
};

const profileSetting = createStorage('setting_storage');

console.log(profileSetting.get('fullName'));

profileSetting.set('fullName', 'Nhat Truong');
