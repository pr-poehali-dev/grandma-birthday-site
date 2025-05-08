import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const Index = () => {
  const [activeImage, setActiveImage] = useState(0);

  const photos = [
    "https://images.unsplash.com/photo-1581579438747-13f6f3d3c732?q=80&w=1740&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?q=80&w=1738&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1454349882053-b5c999298204?q=80&w=1738&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559630197-0a9f3f61cd1a?q=80&w=1587&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556010261-2c0971380bbe?q=80&w=1740&auto=format&fit=crop",
  ];

  const wishes = [
    {
      name: "Света",
      message:
        "Бабушка, с днем рождения! Твои пирожки самые вкусные на свете! Люблю тебя! ❤️",
    },
    {
      name: "Игорь",
      message:
        "Бабуля, желаю тебе крепкого здоровья и многих лет жизни! Ты самая лучшая!",
    },
    {
      name: "Оля",
      message: "Спасибо за твою мудрость и заботу. С днем рождения, родная!",
    },
    {
      name: "Миша",
      message:
        "Бабушка, ты научила меня быть добрым и отзывчивым. С праздником!",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F0]">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556010500-3155fd6975ea?q=80&w=1738&auto=format&fit=crop')",
            filter: "brightness(0.7)",
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <div className="inline-block bg-[#FFDEE2]/90 p-2 px-4 rounded-full mb-2 animate-fade-in">
            <p className="text-sm font-medium">15 мая 2025</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            С Днём Рождения, Бабушка!
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
            Самой любимой и родной бабушке в мире исполняется 65 лет
          </p>
          <Button
            className="bg-[#FEC6A1] hover:bg-[#FEC6A1]/80 text-black px-8 py-6 rounded-full text-lg"
            onClick={() => {
              const wishesSection = document.getElementById("wishes");
              wishesSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Поздравить
          </Button>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 px-4 md:px-8 bg-[#FEF7CD]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Приглашаем на праздник
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/70 border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-2 bg-[#F2FCE2] w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Когда</h3>
                <p>15 мая, 2025</p>
                <p>16:00</p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-2 bg-[#F2FCE2] w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Где</h3>
                <p>Ресторан "Берёзка"</p>
                <p>ул. Центральная, 42</p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-2 bg-[#F2FCE2] w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Программа</h3>
                <p>16:00 - Встреча гостей</p>
                <p>18:30 - Праздничный торт</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Счастливые моменты
          </h2>

          <div className="relative">
            <div className="overflow-hidden h-[70vh] rounded-2xl shadow-xl">
              <img
                src={photos[activeImage]}
                alt={`Фотография ${activeImage + 1}`}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />
            </div>

            <button
              onClick={() =>
                setActiveImage((prev) =>
                  prev === 0 ? photos.length - 1 : prev - 1,
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() =>
                setActiveImage((prev) =>
                  prev === photos.length - 1 ? 0 : prev + 1,
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="flex gap-2 mt-4 justify-center">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-3 h-3 rounded-full ${index === activeImage ? "bg-[#FEC6A1]" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Wishes Section */}
      <section id="wishes" className="py-16 px-4 md:px-8 bg-[#F2FCE2]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Поздравления от близких
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {wishes.map((wish, index) => (
              <Card
                key={index}
                className="bg-white/70 border-none shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-[#FFDEE2] rounded-full flex items-center justify-center mb-2">
                      <span className="font-bold text-lg">
                        {wish.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg">{wish.name}</h3>
                  </div>
                  <Separator className="my-2" />
                  <p className="italic">{wish.message}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-gray-600">Добавьте свое поздравление</p>
            <Button className="bg-[#FEC6A1] hover:bg-[#FEC6A1]/80 text-black px-6 py-2 rounded-full">
              Написать пожелание
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-600 bg-[#FFF9F0] border-t border-gray-200">
        <p>С любовью к нашей бабушке ❤️</p>
        <p className="text-sm mt-2">2025</p>
      </footer>
    </div>
  );
};

export default Index;
