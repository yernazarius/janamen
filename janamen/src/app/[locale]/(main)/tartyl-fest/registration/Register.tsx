"use client";
import { AxiosDefault } from "@/api/interceptors";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { conthrax } from '@/styles/fonts';
import { AgeCategoryEnum, DistanceEnum, EventEnum, GenderEnum } from "@/types";


interface IForm {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    gender: GenderEnum;
    address: string;
    participateInRun: boolean;
    runDistance: DistanceEnum | null;
    ageCategory: AgeCategoryEnum;
    events: EventEnum[];
    medicalIssues: boolean;
    emergencyContactName: string;
    emergencyContactPhone: string;
    emergencyContactRelation: string;
    howDidYouHear: string;
}

export default function EventRegistrationForm() {
    const [formData, setFormData] = useState<IForm>({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: GenderEnum.male,
        address: '',
        participateInRun: false,
        runDistance: null,
        ageCategory: AgeCategoryEnum.Under17,
        events: [],
        medicalIssues: false,
        emergencyContactName: '',
        emergencyContactPhone: '',
        emergencyContactRelation: '',
        howDidYouHear: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value === 'true' ? true : value === 'false' ? false : value,
        }));
    };



    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: checked,
        }));
    };

    const handleEventChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormData(prevState => {
            const events = checked
                ? [...prevState.events, value as EventEnum]
                : prevState.events.filter(event => event !== value);
            return { ...prevState, events };
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await AxiosDefault.post('register', formData);
            if (response.data) {
                router.push('/registration/success');
            }
        } catch (err) {
            setError('Ошибка при регистрации. Пожалуйста, попробуйте снова.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`mt-56 flex flex-col ${conthrax.className} uppercase`}>
            <form className="" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    {/* start */}
                    <div className="flex flex-row justify-between mt-12">
                        <div className="w-1/3">
                            <label htmlFor="firstName" className="block text-xl font-medium leading-6 text-white">
                                Ваше ФИО
                            </label>
                            <div className="mt-3">
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="pl-2 block w-full bg-primary_dark rounded-md py-1.5 text-white shadow-sm ring-1 ring-inset ring-tartyl_primary focus:ring-2 focus:ring-inset focus:border-0 focus:outline-none focus:ring-tartyl_primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="w-1/3">
                            <label htmlFor="lastName" className="block text-xl font-medium leading-6 text-white">
                                Ваши контакты
                            </label>
                            <div className="mt-3">
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="pl-2 block w-full bg-primary_dark rounded-md py-1.5 text-white shadow-sm ring-1 ring-inset ring-tartyl_primary focus:ring-2 focus:ring-inset focus:border-0 focus:outline-none focus:ring-tartyl_primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>


                    </div>

                    <div className="flex flex-row justify-between mt-12">
                        <div className="w-1/3">
                            <label htmlFor="dateOfBirth" className="block text-xl font-medium leading-6 text-white">
                                Дата рождения
                            </label>
                            <div className="mt-3">
                                <input
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    type="date"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    required
                                    className="pl-2 block w-full bg-primary_dark rounded-md py-1.5 text-white shadow-sm ring-1 ring-inset ring-tartyl_primary focus:ring-2 focus:ring-inset focus:border-0 focus:outline-none focus:ring-tartyl_primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="w-1/3">
                            <label htmlFor="gender" className="block text-xl font-medium leading-6 text-white">
                                Пол
                            </label>
                            <div className="mt-3">
                                <select
                                    id="gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    required
                                    className="pl-2 block w-full bg-primary_dark rounded-md py-1.5 text-white shadow-sm ring-1 ring-inset ring-tartyl_primary focus:ring-2 focus:ring-inset focus:border-0 focus:outline-none focus:ring-tartyl_primary sm:text-sm sm:leading-6"
                                >
                                    {Object.values(GenderEnum).map((gender) => (
                                        <option key={gender} value={gender}>{gender}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between mt-12">
                        <div className="w-1/2">
                            <label htmlFor="address" className="block text-xl font-medium leading-6 text-white">
                                Адрес проживания
                            </label>
                            <div className="mt-3">
                                <input
                                    id="address"
                                    name="address"
                                    type="text"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    className="pl-2 block w-full bg-primary_dark rounded-md py-1.5 text-white shadow-sm ring-1 ring-inset ring-tartyl_primary focus:ring-2 focus:ring-inset focus:border-0 focus:outline-none focus:ring-tartyl_primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between mt-12">
                        <div className="w-full">
                            <label className="block text-xl font-medium leading-6 text-white">
                                Будете ли вы участвовать на <span className="text-tartyl_primary ">Боксзабеге?</span>
                            </label>
                            <div className="mt-2 flex items-center space-x-4">
                                <label className="text-white cursor-pointer">
                                    <input
                                        type="radio"
                                        name="participateInRun"
                                        value="true"
                                        checked={formData.participateInRun === true}
                                        onChange={handleRadioChange}
                                        className="hidden"
                                    />
                                    <span className={`inline-block px-4 py-2 rounded-md ${formData.participateInRun === true ? 'bg-tartyl_primary text-white' : 'bg-primary_dark text-gray-400'}`}>
                                        Да
                                    </span>
                                </label>
                                <label className="text-white cursor-pointer">
                                    <input
                                        type="radio"
                                        name="participateInRun"
                                        value="false"
                                        checked={formData.participateInRun === false}
                                        onChange={handleRadioChange}
                                        className="hidden"
                                    />
                                    <span className={`inline-block px-4 py-2 rounded-md ${formData.participateInRun === false ? 'bg-tartyl_primary text-white' : 'bg-primary_dark text-gray-400'}`}>
                                        Нет
                                    </span>
                                </label>

                            </div>
                        </div>
                    </div>

                    {formData.participateInRun && (
                        <>
                            <div className="flex flex-row justify-between mt-12">
                                <div className="w-full">
                                    <label className="block text-xl font-medium leading-6 text-white">
                                        Дистанция
                                    </label>
                                    <div className="mt-2 flex items-center space-x-4">
                                        {Object.values(DistanceEnum).map((distance) => (
                                            <label key={distance} className="text-white cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="runDistance"
                                                    value={distance}
                                                    checked={formData.runDistance === distance}
                                                    onChange={(e) => handleRadioChange(e)}
                                                    className="hidden"
                                                />
                                                <span className={`inline-block px-4 py-2 rounded-md ${formData.runDistance === distance ? 'bg-tartyl_primary text-white' : 'bg-primary_dark text-gray-400'}`}>
                                                    {distance}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row justify-between mt-12">
                                <div className="w-full">
                                    <label className="block text-xl font-medium leading-6 text-white">
                                        Возрастная категория
                                    </label>
                                    <div className="mt-2 flex items-center space-x-4">
                                        {Object.values(AgeCategoryEnum).map((category) => (
                                            <label key={category} className="text-white cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="ageCategory"
                                                    value={category}
                                                    checked={formData.ageCategory === category}
                                                    onChange={(e) => handleRadioChange(e)}
                                                    className="hidden"
                                                />
                                                <span className={`inline-block px-4 py-2 rounded-md ${formData.ageCategory === category ? 'bg-tartyl_primary text-white' : 'bg-primary_dark text-gray-400'}`}>
                                                    {category}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    <div className="flex flex-row justify-between mt-12">
                        <div className="w-full">
                            <label className="block text-xl font-medium leading-6 text-white">
                                Выбор мероприятия
                            </label>
                            <div className="mt-2 flex flex-wrap space-x-4">
                                {Object.values(EventEnum).map((event) => (
                                    <label key={event} className="text-white">
                                        <input
                                            type="checkbox"
                                            name="events"
                                            value={event}
                                            checked={formData.events.includes(event)}
                                            onChange={handleEventChange}
                                            className="hidden"
                                        />
                                        <span className={`inline-block px-4 py-2 rounded-md cursor-pointer ${formData.events.includes(event) ? 'bg-tartyl_primary text-white' : 'bg-primary_dark text-gray-400'}`}>
                                            {event}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between mt-12">
                        <div className="w-full">
                            <label className="block text-xl font-medium leading-6 text-white">
                                Есть ли у вас медицинские противопоказания для участия в забеге?
                            </label>
                            <div className="mt-2 flex items-center space-x-4">
                                <label className="text-white">
                                    <input
                                        type="radio"
                                        name="medicalIssues"
                                        value="true"
                                        checked={formData.medicalIssues === true}
                                        onChange={handleRadioChange}
                                        className="hidden"
                                    />
                                    <span className={`inline-block px-4 py-2 rounded-md cursor-pointer ${formData.medicalIssues === true ? 'bg-tartyl_primary text-white' : 'bg-primary_dark text-gray-400'}`}>
                                        Да
                                    </span>
                                </label>
                                <label className="text-white">
                                    <input
                                        type="radio"
                                        name="medicalIssues"
                                        value="false"
                                        checked={formData.medicalIssues === false}
                                        onChange={handleRadioChange}
                                        className="hidden"
                                    />
                                    <span className={`inline-block px-4 py-2 rounded-md cursor-pointer ${formData.medicalIssues === false ? 'bg-tartyl_primary text-white' : 'bg-primary_dark text-gray-400'}`}>
                                        Нет
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between mt-12">
                        <div className="w-1/3">
                            <label htmlFor="emergencyContactName" className="block text-xl font-medium leading-6 text-white">
                                Контактное лицо в случае чрезвычайной ситуации (ФИО)
                            </label>
                            <div className="mt-3">
                                <input
                                    id="emergencyContactName"
                                    name="emergencyContactName"
                                    type="text"
                                    value={formData.emergencyContactName}
                                    onChange={handleChange}
                                    required
                                    className="pl-2 block w-full bg-primary_dark rounded-md py-1.5 text-white shadow-sm ring-1 ring-inset ring-tartyl_primary focus:ring-2 focus:ring-inset focus:border-0 focus:outline-none focus:ring-tartyl_primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="w-1/3">
                            <label htmlFor="emergencyContactPhone" className="block text-xl font-medium leading-6 text-white">
                                Контактный телефон
                            </label>
                            <div className="mt-3">
                                <input
                                    id="emergencyContactPhone"
                                    name="emergencyContactPhone"
                                    type="text"
                                    value={formData.emergencyContactPhone}
                                    onChange={handleChange}
                                    required
                                    className="pl-2 block w-full bg-primary_dark rounded-md py-1.5 text-white shadow-sm ring-1 ring-inset ring-tartyl_primary focus:ring-2 focus:ring-inset focus:border-0 focus:outline-none focus:ring-tartyl_primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="w-1/3">
                            <label htmlFor="emergencyContactRelation" className="block text-xl font-medium leading-6 text-white">
                                Отношение к участнику
                            </label>
                            <div className="mt-3">
                                <input
                                    id="emergencyContactRelation"
                                    name="emergencyContactRelation"
                                    type="text"
                                    value={formData.emergencyContactRelation}
                                    onChange={handleChange}
                                    required
                                    className="pl-2 block w-full bg-primary_dark rounded-md py-1.5 text-white shadow-sm ring-1 ring-inset ring-tartyl_primary focus:ring-2 focus:ring-inset focus:border-0 focus:outline-none focus:ring-tartyl_primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between mt-12">
                        <div className="w-full">
                            <label htmlFor="howDidYouHear" className="block text-xl font-medium leading-6 text-white">
                                Как вы узнали о мероприятии?
                            </label>
                            <div className="mt-3">
                                <input
                                    id="howDidYouHear"
                                    name="howDidYouHear"
                                    type="text"
                                    value={formData.howDidYouHear}
                                    onChange={handleChange}
                                    required
                                    className="pl-2 block w-full bg-primary_dark rounded-md py-1.5 text-white shadow-sm ring-1 ring-inset ring-tartyl_primary focus:ring-2 focus:ring-inset focus:border-0 focus:outline-none focus:ring-tartyl_primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <button
                            type="submit"
                            className={`w-1/4 py-5 px-6 bg-primary text-white rounded-md ${conthrax.className} uppercase text-xl`}
                        >
                            {isLoading ? 'Отправка...' : 'Отправить заявку'}
                        </button>
                    </div>
                </div>
            </form >
        </div >
    );
}
