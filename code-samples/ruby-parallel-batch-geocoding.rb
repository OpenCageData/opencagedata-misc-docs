#!/usr/bin/env ruby

# 1. fill a text file 'addresses.txt'
# Berlin
# Madrid
# Palermo
# Casablanca
# 24.77701,121.02189
# 31.79261,35.21785
# 9.54828,44.07715
# 59.92903,30.32989 
#
# 2. set the api_key to the .rb file (this file)
#
# 3. run this script
#
# 4. output:
#
# 8
# [1, "Berlin", "Germany", "Berlin, Germany"]
# [2, "Palermo", "Italy", "Palermo, Italy"]
# [0, "Madrid", "Spain", "Madrid, Community of Madrid, Spain"]
# [2, "24.77701,121.02189", "Taiwan", "集福宮, 11-2 金山十一街, Jinshan Village, Hsinchu 300, Taiwan"]
# [1, "Casablanca", "Morocco", "Casablanca, préfecture d'arrondissements de Casablanca-Anfa عمالة مقاطعات الدار البيضاء أنفا, Morocco"]
# [0, "31.79261,35.21785", "Israel", "Kemnetz Yeshiva, David Hazan, Jerusalem, Israel"]
# [2, "9.54828,44.07715", "Somalia", "Jameeco Weyn, Hargeisa, Somalia"]
# [1, "59.92903,30.32989", "Russia", "Sadovaya Street 28-30 к38, Apraksin Dvor, округ № 78, Saint Petersburg, Russia, 190000"]
# finished

require 'opencage/geocoder'
require 'thread'
Thread.abort_on_exception = true


api_key = 'YOUR-OPENCAGE-API-KEY'
addresses_filename = 'addresses.txt'
num_threads = 3

@geocoder = OpenCage::Geocoder.new(api_key: api_key)

addresses = File.readlines(addresses_filename)

queue = Queue.new
addresses.each { |addr| queue.push(addr) }
STDERR.puts queue.size

def geocode_one_address(address, thread_id = nil)
  address.strip!

  result = @geocoder.geocode(address, language: 'en', limit: 1, no_annotations: 1).first

  if result
    p [thread_id, address, result.components['country'], result.address]
  else
    p [thread_id, address, '-not-found-']
  end
rescue OpenCage::Geocoder::GeocodingError => e
  STDERR.puts "error on '#{address}': #{e.message}"
end

threads = num_threads.times.map do |thread_id|
  Thread.new do
    while !queue.empty? do
      address = queue.shift # take and remove first object from queue
      geocode_one_address(address, thread_id)
    end
  end
end

threads.each(&:join)

STDERR.puts 'finished'

