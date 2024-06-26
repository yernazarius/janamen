"use client";
import { AxiosDefault } from "@/api/interceptors";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { conthrax, futuraPT } from '@/styles/fonts';
import { CityOfCastingEnum, FamilyStatusEnum, OccupationStatusEnum } from "@/types";

interface IForm {
    firstName: string;
    lastName: string;
    patronicName?: string;
    phoneNumber: string;
    familyStatus: FamilyStatusEnum;
    occupationStatus: OccupationStatusEnum;
    goal: string;
    healthIssues?: string;
    height: number;
    weight: number;
    dateOfBirth: string;
    cityOfCasting: CityOfCastingEnum;
    finalParticipation: boolean;

}

export default function JanamenReg() {
    const [formData, setFormData] = useState<IForm>({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        familyStatus: FamilyStatusEnum.Single,
        occupationStatus: OccupationStatusEnum.Hired,
        goal: '',
        height: 0,
        weight: 0,
        dateOfBirth: '',
        cityOfCasting: CityOfCastingEnum.Almaty,
        finalParticipation: false,
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
            [name]: value === 'true',
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await AxiosDefault.post('login', formData);
            if (response.data) {
                router.push('/janamen/registration/success');
            }
        } catch (err) {
            setError('Неверный пароль или логин');
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
                        <div className="w-1/4">
                            <label htmlFor="firstName" className="block text-xl font-medium leading-6 text-white">
                                Ваше имя
                            </label>
                            <div className="mt-3">
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="pl-2 block w-full bg-primary_dark rounded-md py-1.5 text-white shadow-sm ring-1 ring-inset ring-primary focus:ring-2 focus:ring-inset focus:border-0 focus:outline-none focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="w-1/4">
                            <label htmlFor="lastName" className="block text-xl font-medium leading-6 text-white">
                                Ваша фамилия
                            </label>
                            <div className="mt-3">
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="pl-2 block w-full bg-primary_dark rounded-md py-1.5 text-white shadow-sm ring-1 ring-inset ring-primary focus:ring-2 focus:ring-inset focus:border-0 focus:outline-none focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="w-1/4">
                            <label htmlFor="phoneNumber" className="block text-xl font-medium leading-6 text-white">
                                Ваши контакты
                            </label>
                            <div className="mt-3">
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="text"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                    className="pl-2 block w-full bg-primary_dark rounded-md py-1.5 text-white shadow-sm ring-1 ring-inset ring-primary focus:ring-2 focus:ring-inset focus:border-0 focus:outline-none focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>



                    <div className="flex flex-row justify-between mt-12">
                        <div className="w-2/5">
                            <label htmlFor="familyStatus" className="block text-xl font-medium leading-6 text-white">
                                семейное положение
                            </label>
                            <div className="mt-3">
                                <select
                                    id="familyStatus"
                                    name="familyStatus"
                                    value={formData.familyStatus}
                                    onChange={handleChange}
                                    required
                                    className="pl-2 block w-full bg-primary_dark h-9 rounded-md py-1.5 text-white shadow-sm ring-1 ring-inset ring-primary focus:ring-2 focus:ring-inset focus:border-0 focus:outline-none focus:ring-primary sm:text-sm sm:leading-6"
                                >
                                    {Object.entries(FamilyStatusEnum).map(([key, value]) => (
                                        <option key={key} value={value}>
                                            {value}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="w-2/5">
                            <label htmlFor="occupationStatus" className="block text-xl font-medium leading-6 text-white">
                                род занятий
                            </label>
                            <div className="mt-3">
                                <select
                                    id="occupationStatus"
                                    name="occupationStatus"
                                    value={formData.occupationStatus}
                                    onChange={handleChange}
                                    required
                                    className="pl-2 block w-full bg-primary_dark h-9 rounded-md py-1.5 text-white shadow-sm ring-1 ring-inset ring-primary focus:ring-2 focus:ring-inset focus:border-0 focus:outline-none focus:ring-primary sm:text-sm sm:leading-6"
                                >
                                    {Object.entries(OccupationStatusEnum).map(([key, value]) => (
                                        <option key={key} value={value}>
                                            {value}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between mt-12">
                        <div className="w-2/5">
                            <label htmlFor="goal" className="block text-xl font-medium leading-6 text-white">
                                Укажите цель участия
                            </label>
                            <div className="mt-3">
                                <textarea
                                    id="goal"
                                    name="goal"
                                    value={formData.goal}
                                    onChange={handleChange}
                                    required
                                    className="pl-2 block w-full bg-primary_dark h-40 rounded-md py-1.5 text-white shadow-sm ring-1 ring-inset ring-primary focus:ring-2 focus:ring-inset focus:border-0 focus:outline-none focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="w-2/5">
                            <label htmlFor="healthIssues" className="block text-xl font-medium leading-6 text-white">
                                проблемы со здоровьем
                            </label>
                            <div className="mt-3">
                                <textarea
                                    id="healthIssues"
                                    name="healthIssues"
                                    value={formData.healthIssues}
                                    onChange={handleChange}
                                    className="pl-2 block w-full bg-primary_dark h-40 rounded-md py-1.5 text-white shadow-sm ring-1 ring-inset ring-primary focus:ring-2 focus:ring-inset focus:border-0 focus:outline-none focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between mt-12">
                        <div className="w-1/4">
                            <label htmlFor="height" className="block text-xl font-medium leading-6 text-white">
                                Ваш рост, см
                            </label>
                            <div className="mt-3">
                                <input
                                    id="height"
                                    name="height"
                                    type="number"
                                    value={formData.height}
                                    onChange={handleChange}
                                    required
                                    className="pl-2 block w-full bg-primary_dark rounded-md py-1.5 text-white shadow-sm ring-1 ring-inset ring-primary focus:ring-2 focus:ring-inset focus:border-0 focus:outline-none focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="w-1/4">
                            <label htmlFor="weight" className="block text-xl font-medium leading-6 text-white">
                                Ваш вес, кг
                            </label>
                            <div className="mt-3">
                                <input
                                    id="weight"
                                    name="weight"
                                    type="number"
                                    value={formData.weight}
                                    onChange={handleChange}
                                    required
                                    className="pl-2 block w-full bg-primary_dark rounded-md py-1.5 text-white shadow-sm ring-1 ring-inset ring-primary focus:ring-2 focus:ring-inset focus:border-0 focus:outline-none focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="w-1/4">
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
                                    className="pl-2 block w-full bg-primary_dark rounded-md py-1.5 text-white shadow-sm ring-1 ring-inset ring-primary focus:ring-2 focus:ring-inset focus:border-0 focus:outline-none focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between mt-12">
                        <div className="w-1/2">
                            <label htmlFor="cityOfCasting" className="block text-xl font-medium leading-6 text-white">
                                Выберите город прохождения кастинга
                            </label>
                            <div className="mt-3">
                                <select
                                    id="cityOfCasting"
                                    name="cityOfCasting"
                                    value={formData.cityOfCasting}
                                    onChange={handleChange}
                                    required
                                    className="pl-2 block w-1/2 bg-primary_dark h-9 rounded-md py-1.5 text-white shadow-sm ring-1 ring-inset ring-primary focus:ring-2 focus:ring-inset focus:border-0 focus:outline-none focus:ring-primary sm:text-sm sm:leading-6"
                                >
                                    {Object.entries(CityOfCastingEnum).map(([key, value]) => (
                                        <option key={key} value={value}>
                                            {value}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between mt-12">
                        <div className="w-full">
                            <label className="block text-xl font-medium leading-6 text-white">
                                Сможете приехать в Астану на месяц для финального этапа <br /> проекта &quot;Jana MEN Kazakhstan&quot;?
                            </label>
                            <div className="mt-2 flex items-center space-x-4">
                                <label className="text-white">
                                    <input
                                        type="radio"
                                        name="finalParticipation"
                                        value="true"
                                        checked={formData.finalParticipation === true}
                                        onChange={handleRadioChange}
                                        className="hidden"
                                    />
                                    <span className={`inline-block px-4 py-2 rounded-md cursor-pointer ${formData.finalParticipation === true ? 'bg-primary text-white' : 'bg-primary_dark border border-primary text-gray-400'}`}>
                                        Да
                                    </span>
                                </label>
                                <label className="text-white">
                                    <input
                                        type="radio"
                                        name="finalParticipation"
                                        value="false"
                                        checked={formData.finalParticipation === false}
                                        onChange={handleRadioChange}
                                        className="hidden"
                                    />
                                    <span className={`inline-block px-4 py-2 rounded-md cursor-pointer ${formData.finalParticipation === false ? 'bg-primary text-white' : 'bg-primary_dark  border border-primary text-gray-400'}`}>
                                        Нет
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>



                    {/* end */}
                </div>

                <div className="mt-12">
                    <button
                        type="submit"
                        className={`w-1/4 py-5 px-6 bg-primary text-white rounded-md ${conthrax.className} uppercase text-xl`}
                    >
                        {isLoading ? 'Отправка...' : 'Отправить заявку'}
                    </button>
                </div>
            </form>
        </div>
    );
}
