const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db('movies').collection('movies').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('movies').collection('movies').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createMovie = async (req, res) => {
  const movie = {
    name: req.body.name,
    genre:req.body.genre,
    rating: req.body.rating,
    year:req.body.year,
    boxOffice:req.body.boxOffice,
    rottenTomatoesScore:req.body.rottenTomatoesScore,
    streamingServices:req.body.streamingServices
  };
  
  const response = await mongodb.getDb().db('movies').collection('movies').insertOne(movie);
  console.log(response)
  if (response.acknowledged){
    res.status(201).json(response);
  } else{
    res.status(500).json(response.error || 'some error occured while creating the movie.');
  }
  };

  const updateMovie = async (req, res) => {
    const userId = new ObjectId(req.params.id);

    const movie = {
      name: req.body.name,
      genre:req.body.genre,
      rating: req.body.rating,
      year:req.body.year,
      boxOffice:req.body.boxOffice,
      rottenTomatoesScore:req.body.rottenTomatoesScore,
      streamingServices:req.body.streamingServices
    };
    const response = await mongodb
    .getDb()
    .db('movies')
    .collection('movies')
    .replaceOne({_id: userId }, movie);
    console.log(response);
    if (response.modifiedCount > 0){
      res.status(204).send();
    } else{
      res.status(500).json(response.error || "some error occured while updating the movie. ");
    }
    };

    const deleteMovie = async (req,res) => {
      const userId = new ObjectId(req.params.id);
      const response = await mongodb.getDb().db('movies').collection('movies').deleteOne({_id: userId},true);
      console.log(response);
      if (response.deletedCount > 0) {
        res.status(204).send();
      } else {
        res.status(500).json(response.error || 'Some error ocurred while deleting movie. ');
      }
      }
    



module.exports = { 
  getAll, 
  getSingle,
createMovie,
updateMovie,
deleteMovie
 };