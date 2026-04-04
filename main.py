from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    destinations_data = [
        {
            "bg_image": "Vector.png",
            "rating": "★★★★★",
            "subtitle": "JAPAN",
            "title": "Tokyo",
            "paragraph": "Immerse yourself in the bustling metropolis of Tokyo, where ancient traditions harmonize with futuristic technology."
        },
        {
            "bg_image": "Kyoto.jpg",
            "rating": "★★★★★",
            "subtitle": "JAPAN",
            "title": "Kyoto",
            "paragraph": "Step into the timeless beauty of Kyoto, where ancient temples and traditional tea houses transport you to a bygone era."
        },
        {
            "bg_image": "Vector-2.png",
            "rating": "★★★★★",
            "subtitle": "JAPAN",
            "title": "Osaka",
            "paragraph": "Experience the culinary paradise of Osaka, where street food stalls and Michelin-starred restaurants coexist."
        }
    ]

    packages_data = [
        {"name": "Tokyo City Explorer", "price": "1,200"},
        {"name": "Kyoto Temple Retreat", "price": "950"},
        {"name": "Osaka Foodie Tour", "price": "850"},
        {"name": "Hokkaido Winter Wonderland", "price": "1,500"},
        {"name": "Mount Fuji Adventure", "price": "1,100"},
        {"name": "Nara Heritage Walk", "price": "750"}
    ]
    
    return render_template('index.html', destinations=destinations_data, packages=packages_data)
if __name__ == '__main__':
    app.run(debug=True)