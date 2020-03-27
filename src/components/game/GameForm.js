import React, { Fragment, useState, useEffect } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../store/actions/alert';
import { saveGame } from '../../store/actions/game';
import { getGame } from '../../store/actions/game';

import Alert from '../layout/Alert';
import Select from 'react-select';
// import Moment from 'react-moment';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import {
  formatDate,
  parseDate
} from 'react-day-picker/moment';
import Spinner from '../layout/Spinner';

const GameForm = ({
  setAlert,
  getGame,
  saveGame,
  game: { game, loading, btnLoading, gameLoaded },
  history
}) => {
  // formData is the state variable, and setFormData is the function that updates the state
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    country: '',
    available_from: '',
    description: '',
    image: ''
  });
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');

  const { name, price, country, available_from, description, image } = formData;

  const { id } = useParams();
  let operation = 'Add';
  // console.log(id);

  if (id) {
    operation = 'Edit';
  }

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const onChangeFile = e => {
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
    };

  const onSubmit = e => {
    e.preventDefault();
    const formDataFinal = new FormData();

    formDataFinal.append('name', name);
    formDataFinal.append('price', price);
    formDataFinal.append('country', country.value);
    formDataFinal.append('available_from', available_from);
    formDataFinal.append('description', description);

    if (file) {
      formDataFinal.append('image', file);
    }

    if (price === '') {
      setAlert('Price cannot be empty', 'danger');
    } else {
      // console.log(formDataFinal);
      saveGame(formDataFinal, id, history);
    }
  };

  const handleSelectChange = selectedOption => {
    // console.log(selectedOption);
    setFormData({ ...formData, country: selectedOption });
  };

  const handleDayChange = selectedDay => {
    // console.log(selectedDay.toLocaleDateString());
    setFormData({
      ...formData,
      available_from: selectedDay.toLocaleDateString()
    });
  };

  const options = [
    { value: 'United States', label: 'United States' },
    { value: 'Lebanon', label: 'Lebanon' },
    { value: 'United Kingdom', label: 'United Kingdom' },
    { value: 'France', label: 'France' },
    { value: 'Thailand', label: 'Thailand' }

  ];

  // const FORMAT = 'DD/MM/YYYY';
  const FORMAT = 'DD-MM-YYYY';

  useEffect(() => {
    if (id && !loading && !gameLoaded) {
      getGame(id);
    }

    if (gameLoaded) {
      console.log(game);
      let selectedCountry = !game.country ? '' : game.country;
      let selectedOption = { label: selectedCountry, value: selectedCountry };
      // for (let name in this.state) {
      //   formData.append(name, this.state[name]);
      // }
      setFormData({
        name: !game.name ? '' : game.name,
        price: !game.price ? '' : game.price,
        description: !game.description ? '' : game.description,
        image: !game.image ? '' : game.image,

        available_from: !game.available_from
          ? ''
          : game.available_from,
        country: selectedOption
      });

      // handleSelectChange(selectedOption);
    }

    if (!id) {
      setFormData({ name: '', price: '', description: '', available_from: '' });
    }
  }, [id, loading, gameLoaded, game, getGame]);

  return (
    <Fragment>
      <div className='bradcam_area banner-4 bradcam_area_sm'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='bradcam_text text-center'>
                <h3>{operation} Game</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {loading && id ? (
        <div style={{ minHeight: '280px', marginTop: '120px' }}>
          <Spinner />
        </div>
      ) : (
        <section className='contact-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <Alert />
                <h2 className='contact-title'>Game Details</h2>
              </div>
              <div className='col-lg-8'>
                <form
                  className='form-contact contact_form'
                  onSubmit={onSubmit}
                  // encType="multipart/form-data"
                >
                  <div className='row'>
                    <div className='col-sm-6'>
                      <div className='form-group'>
                        <input
                          className='form-control valid'
                          name='name'
                          id='name'
                          type='text'
                          placeholder='Name'
                          value={name}
                          onChange={e => onChange(e)}
                        />
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='form-group'>
                        <input
                          className='form-control '
                          name='price'
                          id='price'
                          type='text'
                          placeholder='Price'
                          value={price}
                          onChange={e => onChange(e)}
                        />
                      </div>
                    </div>
                    <div className='col-12'>
                      <div className='form-group'>
                        <Select
                          options={options}
                          name='country'
                          value={country}
                          placeholder='Select country'
                          className='react-select-container'
                          classNamePrefix='react-select'
                          onChange={handleSelectChange}
                          // selectedOption={options[1]}
                          // value={options[2]}
                        />
                      </div>
                    </div>
                    <div className='col-sm-12'>
                      <div className='form-group'>
                        <DayPickerInput
                          formatDate={formatDate}
                          parseDate={parseDate}
                          format={FORMAT}
                          // placeholder={`${formatDate(new Date())}`}
                          placeholder='Date available from'
                          onDayChange={handleDayChange}
                          // value={available_from}
                          value={available_from ? formatDate(available_from, FORMAT) : ''}
                        />
                        {/* {available_from && (
                          <p className='selected-date'>
                            Selected Date:{' '}
                            <Moment format='DD-MM-YYYY'>
                              {available_from}
                            </Moment>{' '}
                          </p>
                        )} */}

                        {/* {available_from ? (<p className='selected-date'>Selected Date: <Moment format="DD-MM-YYYY">{available_from}</Moment> </p>) : (<p>No date selected</p>)} */}
                      </div>
                    </div>
                    <div className='col-12'>
                      <div className='form-group'>
                        <textarea
                          className='form-control w-100'
                          name='description'
                          id='description'
                          cols='30'
                          rows='9'
                          placeholder='Description'
                          value={description}
                          onChange={e => onChange(e)}
                        ></textarea>
                      </div>
                    </div>
                    {/* <div className='col-12'>
                    <div className='form-group'>
                      Image: <input type='file' />
                    </div>
                  </div> */}

                    <div className='col-12'>
                      <div className='custom-file'>
                        <input
                          type='file'
                          className='custom-file-input'
                          id='customFile'
                          name='image'
                          onChange={onChangeFile}
                        />
                        <label
                          className='custom-file-label'
                          htmlFor='customFile'
                        >
                          {filename}
                        </label>
                      </div>
                      {image && <div>
                      <p className='my-1'>Current Image</p>
                        <img src={`${image}`} className='img-fluid w-50' alt='Game' />
                      </div>}
                    </div>
                  </div>
                  <div className='form-group mt-3'>
                    <button
                      type='submit'
                      className={`button button-contactForm boxed-btn btn-fixed-width `}
                      disabled={btnLoading}
                      // onClick={e => {e.preventDefault(); onSubmit()}}
                    >
                      <i
                        className={`mr-1X ${
                          btnLoading ? 'mr-1 fa fa-circle-o-notch fa-spin' : ''
                        }`}
                      ></i>
                      {btnLoading ? 'Saving' : 'Save'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
};

GameForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
  getGame: PropTypes.func.isRequired,
  saveGame: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps, {
  setAlert,
  saveGame,
  getGame
})(withRouter(GameForm));
