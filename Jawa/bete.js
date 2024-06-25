// Mendapatkan data harga Bitcoin dari CoinGecko API
const getBitcoinPrice = async () => {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        const bitcoinPrice = data.bitcoin.usd;
        return bitcoinPrice;
    } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
        return null;
    }
};

// Memanggil fungsi untuk mendapatkan harga Bitcoin
getBitcoinPrice()
    .then(price => {
        if (price) {
            console.log('Harga Bitcoin saat ini: $' + price);
        } else {
            console.log('Gagal mendapatkan harga Bitcoin.');
        }
    });
